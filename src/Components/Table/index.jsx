import React, { useState } from "react";
import { Table } from "antd";

const App = ({ columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [titleLanguageFilter, setTitleLanguageFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTitleLanguageChange = (event) => {
    setTitleLanguageFilter(event.target.value);
  };
  const handleSortToggle = () => {
    // Toggle between 'asc' and 'desc' when sorting button is clicked
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredData = [...data]
    .sort((a, b) => (sortOrder === 'asc' ? a.id - b.id : b.id - a.id))
    .filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const titleLanguageMatch =
        titleLanguageFilter === '' ||
        user.options.titleLanguage.toLowerCase().includes(titleLanguageFilter.toLowerCase());

      return nameMatch && titleLanguageMatch;
    });

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className="mb-12 flex-row">
      <input
        placeholder="Search by name...."
        className="border-b-2 border-slate-300 bg-transparent py-1 w-[400px] placeholder:text-slate-300 outline-none mb-2"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="flex items-center mb-4">
        <select
          value={titleLanguageFilter}
          onChange={handleTitleLanguageChange}
        >
          <option value="">All Languages</option>
          <option value="ENGLISH">English</option>
          <option value="ROMAJI">ROMAJI</option>
          {/* Add other language options based on your data */}
        </select>

        <button
          onClick={handleSortToggle}
          className="p-1 ml-2 bg-blue-500 text-white rounded"
        >
          {sortOrder === 'asc' ? 'Sort Desc' : 'Sort Asc'}
        </button>
      </div>

      <Table rowSelection={rowSelection} columns={columns} dataSource={filteredData} />
    </div>
  );
};
export default App;
