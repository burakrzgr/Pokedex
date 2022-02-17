import React from "react";
import PokeCard from "./PokeCard"
import { Row, Container } from 'react-bootstrap';
import Popup from "./PopUp";
import NewPokeCard from "./NewPokeCard";

const Main = ({ list,addPokeEvent }) => {
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
      <NewPokeCard addPokeEvent={addPokeEvent} />
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