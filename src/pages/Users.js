import { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ElipsisIcon from '../icons/ElipsisIcon';
import { url } from '../service';
import Filter from '../components/Filter';
import { filterList } from '../utils';

const initialFilterState = {
  searchValue: '',
  pageSize: 4,
  pageNumber: 1
};
const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [filterValue, setFilterValue] = useState('all');
  const [filterState, setFilterState] = useState(initialFilterState);
  const [filteredData, setFilteredData] = useState([]);
  const [indexes, setIndexes] = useState({
    start: 0,
    end: 0
  });
  const columns = [
    {
      name: 'Name',
      selector: (row) => `${row.first_name} ${row.last_name}`
    },
    {
      name: 'Email',
      selector: (row) => row.email
    },
    {
      name: 'Phone',
      selector: (row) => row.phone
    },
    {
      name: 'Service Requested',
      selector: (row) => (row.shop ? row.shop.service.description : '---')
    },
    {
      name: 'Shop',
      selector: (row) => (row.shop ? row.shop.name : '---')
    },
    {
      name: 'Qualification',
      selector: (row) => row.qualification
    },
    {
      name: 'Actions',
      selector: () => <ElipsisIcon />,
      right: true,
      width: '80px'
    }
  ];

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsersData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      let filteredData = [...usersData];
      if (filterValue === 'unregistered') {
        filteredData = filteredData.filter((user) => user.shop == null && user.business == null);
      } else if (filterValue === 'registered') {
        filteredData = filteredData.filter((user) => user.shop || user.business);
      }
      const startIndex = (filterState.pageNumber - 1) * filterState.pageSize;
      const endIndex = startIndex + filterState.pageSize;
      setFilteredData(filteredData.slice(startIndex, endIndex));
      setIndexes({
        start: startIndex,
        end: endIndex
      });
    };

    filterData();
  }, [usersData, filterValue, filterState.pageNumber, filterState.pageSize]);

  const handleChange = (name, value) => {
    setFilterState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const onPreviousClick = () => {
    if (filterState.pageNumber > 1) {
      setFilterState((prevState) => ({
        ...prevState,
        pageNumber: prevState.pageNumber - 1
      }));
    }
  };

  const onNextClick = () => {
    const totalPages = Math.ceil(
      // eslint-disable-next-line no-unsafe-optional-chaining
      usersData?.length / filterState.pageSize
    );

    if (filterState.pageNumber < totalPages) {
      setFilterState((prevState) => ({
        ...prevState,
        pageNumber: prevState.pageNumber + 1
      }));
    }
  };
  return (
    <DashboardLayout pageTitle="Users">
      <section className="flex flex-col">
        <div className="mb-4">
          <Filter
            filterList={filterList}
            filterValue={filterValue}
            onChange={(val) => setFilterValue(val)}
          />
        </div>

        <Table
          data={filteredData}
          columns={columns}
          total={usersData.length}
          onPageNumberChange={(val) => handleChange('pageNumber', val)}
          currentPageNumber={filterState.pageNumber}
          currentPageSize={filterState.pageSize}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          startIndex={indexes.start + 1}
          endIndex={indexes.end}
        />
      </section>
    </DashboardLayout>
  );
};
export default Users;
