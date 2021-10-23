import "./App.css";
import { Layout } from "antd";
import styled from "styled-components";
import TopHeader from "./views/container/TopHeader";
import MainContent from "./views/createObservation/MainContent";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <MainContent />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
}

var { Header, Footer, Sider, Content } = Layout;

Header = styled(Header)`
  background-color: #112565;
  height: 4rem;
`;

Sider = styled(Sider)`
  /* background-color: #edf2f6; */
  background-color: "orange";
`;

Content = styled(Content)`
  padding: 0.5rem 0.5rem;
`;

export default App;
