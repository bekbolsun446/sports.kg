import React, {useEffect, useState} from 'react';
import classes from "./cards.module.scss";
import Card from "../../card/Card";
import {useSelector} from "react-redux";
import {getFetcher} from "../../../store/api";
import LoaderSpinner from "../../loaderSpinner/LoaderSpinner";
import {
    filteringCategory,
    filteringInfrastructure,
    filteringMaxPrice,
    filteringMinPrice,
    filteringPage,
    filteringSearch,
    filteringType
} from "../../../filtering/filteringSportArea";

export default function Cards() {

    const areasDetails = useSelector(state => state.areas)
    const [areas, setAreas] = useState(null)
    let search = filteringSearch(areasDetails);
    let category = filteringCategory(areasDetails)
    let type = filteringType(areasDetails)
    let minPrice = filteringMinPrice(areasDetails)
    let maxPrice = filteringMaxPrice(areasDetails)
    let infrastructure = filteringInfrastructure(areasDetails)
    let page = filteringPage(areasDetails)

    let url = `sports_areas/?` + search + category + type + minPrice + maxPrice + infrastructure + page + '&per_page=100000'
    useEffect(() => {
        getFetcher(url)
            .then(res => {
                setAreas(res.results)
            })
    }, [areasDetails.page,
        areasDetails.category,
        areasDetails.minPrice,
        areasDetails.maxPrice,
        areasDetails.page,
        areasDetails.infrastructure,
        areasDetails.type,

    ])


    if (!areas) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <div className={classes.cards}>
            {areas.map(area =>
                <div key={area.id} className={classes.card}>
                    <Card card={area} link={''}/>
                </div>
            )}
        </div>
    );
};