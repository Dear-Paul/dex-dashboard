import { useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import DropDownIcon from '../icons/DropDown';

const Filter = ({ filterList, filterValue, onChange }) => {
  const [showFilter, setShowFilter] = useState(false);

  const activeModalRef = useRef(null);
  useOnClickOutside(activeModalRef, () => {
    setShowFilter(false);
  });
  return (
    <div className="shadow-lg relative flex h-[58px] w-[229px] flex-col  rounded-lg bg-white px-3 py-[5px]">
      <span className="text-[12px] font-normal text-inactive">Filter</span>
      <div
        className={`flex flex-row items-center gap-2 ${
          filterValue ? 'justify-between' : 'justify-end'
        }`}
        onClick={() => setShowFilter(!showFilter)}>
        <span className=" text-sm font-normal text-dark ">{filterValue && filterValue}</span>
        <i className="flex -mt-1 items-center justify-center">
          <DropDownIcon />
        </i>
      </div>
      {showFilter && (
        <section
          className="shadow-modal-content absolute top-14 z-[999]  w-[360px] rounded-[10px] bg-white p-3"
          ref={activeModalRef}>
          {filterList.map(({ title, value }, i) => (
            <div
              key={i}
              className="flex h-12 cursor-pointer items-center justify-center text-sm font-medium text-dark hover:bg-[#F3F3F3]"
              onClick={() => {
                onChange(value);
                setShowFilter(!showFilter);
              }}>
              {title}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
export default Filter;
