import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Table from "../../Components/Table";
import { UserQuery, location } from '../../Client/Queries/index'
import { client } from "../../Client";
const Index = ({ activePage, setActivePage }) => {
  const [users, setUsers] = useState([])
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: 'Image',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record) => {
        if (typeof text === 'object' && text.medium) {
          return <img src={text.medium} alt="example" style={{ maxWidth: '40px', maxHeight: '40px' }} />;
        } else if (typeof text === 'string') {
          return <img src={text} alt="example" style={{ maxWidth: '50px', maxHeight: '50px' }} />;
        } else {
          return null;
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "About",
      dataIndex: "about",
    },
    {
      title: 'Language',
      dataIndex: 'options',
      key: 'options',
      render: (text) => <span>{text?.titleLanguage}</span>,
    },
  ];
  useEffect(() => {
    callingUserPage()
  }, [])
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      id: i + 1,
      avatar: "http://firefile.com/image/Image.png",
      name: `Edward King ${i + 1}`,
      createdAt: "12/10/200" + i,
      updatedAt: "12/10/200" + 2,
      about: "Nimda dojras tell me naa ka rahito hitaiiii",
      moderatorRoles: i % 2 ? `ADMIN` : `LEAD_DEVELOPER`,
    });
  }


  const callingUserPage = () => {
    client
      .query({
        query: UserQuery,
        variables: { page: 1, perPage: 50 },
        fetchPolicy: 'no-cache',
      })
      .then(response => {
        // console.log(response?.data.Page?.users, 'response');
        setUsers(response?.data.Page?.users)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div>
      <Sidebar activePage={activePage} setActivePage={setActivePage}>
        <Table columns={columns} data={users} />
      </Sidebar>
    </div>
  );
};

export default Index;
