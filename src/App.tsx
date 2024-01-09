import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Status from "./components/Status";
function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Status />
    </div>
  );
}

export default App;

//component structure
{
  /* <SideBar>
        <profile>
          <logo/>
          <Name/>
        </profile>
      </SideBar>
      <div>
        <Navbar />
        <Status>
          <h1></h1>
          <div>
            <Card />
            <Card />
          </div>
        </Status>

        <Transactions>
          <heading></heading>
          <Filter />
          <TransactionList />
          <Paginations />
        </Transactions>
      </div> */
}
