import React from "react";
import PokeCard from "./pokecard.js"
import { Row, Container } from 'react-bootstrap';
import Popup from "./popup.js";

const Main = ({ list }) => {
  const [modalData, setModalData] = React.useState({data:{},show:false});
  const setShow = (vis) => {
    setModalData({...modalData, show : vis});
  }
  const setData = (data) => {
    setModalData({data :{...data},show:true});
  }
  return (
    <Container fluid >
      <Row>
        {list.map((data, key) => {
          return (
            <PokeCard key={key} data={data} setModalShow={setData} /> //bcolor={data.BColor} fcolor={data.FColor} img={data.Img} name={data.Name} desc={data.Desc} type={data.Type} />
          );
        })}
      </Row>
      <Popup 
        data={modalData.data}
        show={modalData.show}
        handleClose={() => setShow(false)}
        setModalShow={setData}
        />
    </Container >
  );
}

export default Main;