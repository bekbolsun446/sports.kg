import React from 'react';
import classes from "./cards.module.scss";
import Card from "../../card/Card";

export default function Cards({sportAreas}) {

    return (
        <div className={classes.cards}>
            {sportAreas.results.map(area =>
                <div key={area.id} className={classes.card}>
                    <Card card={area} link={''}/>
                </div>
            )}
        </div>
    );
};