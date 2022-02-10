import { Layout, Breadcrumb, Divider } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

import DataTable from './components/DataTable';



function App() {
  return (
    <div className="App">
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0 0 0' }}>
          <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="/">Administration</a></Breadcrumb.Item>
          <Breadcrumb.Item>Logger Search</Breadcrumb.Item>
        </Breadcrumb>
        <Divider />
        <DataTable />
      </Layout>
    </div>
  );
}

export default App;
