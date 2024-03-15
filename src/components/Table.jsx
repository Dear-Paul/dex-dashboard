/* eslint-disable prettier/prettier */
import DataTable from 'react-data-table-component';
import Pagination from './Pagination';

const customStyles = {
  rows: {
    style: {
      minHeight: '55px',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      borderBottom: '1px solid #3A5743',
      color: '#8D9091',
      fontSize: '14px'
    }
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      color: '#8D9091',
      fontSize: '14px'
    }
  }
};
const Table = (props) => {
  const {
    total,
    onPageNumberChange,
    currentPageNumber,
    currentPageSize,
    onNextClick,
    onPreviousClick,
    startIndex,
    endIndex
  } = props;
  const totalPages = Math.ceil(total / currentPageSize || 1);
  return (
    <>
      <DataTable data={props.data} columns={props.columns} customStyles={customStyles} />
      <Pagination
        totalPages={totalPages}
        total={total}
        onPageNumberChange={onPageNumberChange}
        currentPageNumber={currentPageNumber}
        currentPageSize={currentPageSize}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </>
  );
};
export default Table;
