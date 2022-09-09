import Container from "../../container/Container";
import classes from "./sportAreas.module.scss";
import Hero from "../../components/sport-areas-page/hero/Hero";
import Filter from "../../components/sport-areas-page/filter/Filter";
import axios from "axios";
import LoaderSpinner from "../../components/loaderSpinner/LoaderSpinner";
import Cards from "../../components/sport-areas-page/cards/Cards";

export default function SportAreas({categories, sportAreas}) {

    if (!categories || !sportAreas) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <Container>
            <Hero/>
            <div className="container">
                <div className={[classes.area_content, 'row'].join(' ')}>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                        <Filter categories={categories}/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className={classes.areas_head}>
                            <input placeholder='Kг спорт' type="text"/>
                            <p>Показано 1– 9 из 16 результатов</p>
                        </div>
                        <Cards sportAreas={sportAreas}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export const getStaticProps = async () => {

    const resCategories = await axios.get('http://admin.sports.com.kg/api/categories/')
    const categories = resCategories.data

    const resSportAreas = await axios.get('http://admin.sports.com.kg/api/sports_areas/')
    const sportAreas = resSportAreas.data

    return {
        props: {
            categories: categories,
            sportAreas: sportAreas,
        }
    }
}