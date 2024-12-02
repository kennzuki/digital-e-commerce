
import Header from "./_components/Header";

function Provider  ({children}) {
  return (
      <div>
          <Header />
          <div className="">
          {children}
          </div>
        
    </div>
  )
}

export default Provider