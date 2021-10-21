import "./App.css";
import { version, Layout } from "antd";
import TopHeader from "./views/createObservation/TopHeader";
import styled from "styled-components";

function App() {
  var { Header, Footer, Sider, Content } = Layout;

  // const Button = styled.button`
  //   color: palevioletred;
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;

  // const TomatoButton = styled(Button)`
  //   color: tomato;
  //   border-color: tomato;
  // `;

  Header = styled(Header)`
    background-color: #112565;
  `;

  return (
    <div className="App">
      {/* <h1>{version}</h1>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}

      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
}

export default App;
