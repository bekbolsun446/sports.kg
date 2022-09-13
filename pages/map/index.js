import Container from "../../container/Container";
import Hero from "../../components/hero/Hero";
import Filter from "../../components/sport-areas-page/filter/Filter";
import classes from "./map.module.scss";
import axios from "axios";
import Map1 from "../../components/map/map1/Map1";
import LoaderSpinner from "../../components/loaderSpinner/LoaderSpinner";

export default function MainPage({categories, mapAreas}) {

    const areaHero = {
        title: 'НАХОДИТЕ СПОРТИВНЫЕ ПЛОЩАДКИ ',
        description: 'Cпортивные площадки на карте',
        image: 'http://sports.com.kg/img/banner.jpg'
    }

    if (!categories || !mapAreas) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <Container>
            <Hero areaHero={areaHero}/>
            <div className="container">
                <div className={[classes.map_content, 'row'].join(' ')}>
                    <div className={['col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12', classes.filter_content].join(' ')}>
                        <Filter categories={categories}/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className={classes.map_head}>
                            <input placeholder='Kг спорт' type="text"/>
                        </div>
                        <Map1 mapAreas={mapAreas}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export const getStaticProps = async () => {

    const resCategories = await axios.get('http://admin.sports.com.kg/api/categories/')
    const categories = resCategories.data

    const resMapAreas = await axios.get('http://admin.sports.com.kg/api/sports_areas/for_map/')
    const mapAreas = resMapAreas.data

    return {
        props: {
            categories: categories,
            mapAreas
        }
    }
}