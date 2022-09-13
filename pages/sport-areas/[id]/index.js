import Container from "../../../container/Container";
import classes from "./areaDetail.module.scss";
import Filter from "../../../components/sport-areas-page/filter/Filter";
import Cards from "../../../components/sport-areas-page/cards/Cards";
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import About from "../../../components/areasDetails/about/About";
import Slide from "../../../components/areasDetails/slide/Slide";
import Map1 from "../../../components/map/map1/Map1";
import axios from "axios";

export default function AreaDetail({area}) {
    let map = [
        {
            id: 1,
            latitude: area.latitude,
            longitude: area.longitude
        }
    ]
    return (
        <Container>
            <div className={classes.detail}>
                <div className="container">
                    <h3 className={classes.title}>Kg sport</h3>
                    <div className={[classes.detail_content, 'row'].join(' ')}>
                        <div className={'col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'}>
                            <Slide/>
                        </div>
                        <div className={'col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'}>
                            <About area={area}/>
                        </div>
                    </div>
                    <div className={classes.map}>
                        <Map1 mapAreas={map}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export const getServerSideProps = async (context) => {
    const {id} = context.params
    console.log(id)
    const resArea = await axios.get(`http://admin.sports.com.kg/api/sports_area/detail/${id}/`)
    const area = resArea.data
    if (!area) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            area: area
        }
    }
}
