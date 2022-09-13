import React from 'react';
import {
    FullscreenControl, GeolocationControl,
    Map,
    Placemark,
    SearchControl,
    TrafficControl,
    TypeSelector,
    YMaps,
    ZoomControl
} from "react-yandex-maps";
import classes from "./map1.module.scss";

export default function Map1({mapAreas}) {

    return (
        <YMaps>
            <div className={classes.map1_content}>
                <Map
                    className={classes.map1}
                    width={'100%'}
                    height={500}
                    defaultState={{
                        center: [42.875969, 74.603701],
                        zoom: 11.58,
                    }}
                >
                    <TrafficControl options={{
                        float: 'right'
                    }}/>
                    <TypeSelector options={{
                        float: 'right'
                    }}/>
                    <ZoomControl
                        options={{
                            float: 'left'
                        }}
                    />
                    <FullscreenControl/>
                    <GeolocationControl options={{
                        float: 'left'
                    }}/>
                    <SearchControl options={{
                        float: 'left'
                    }}/>

                    {mapAreas && mapAreas.map(area =>
                        <Placemark
                            key={area.id}
                            geometry={[area.latitude, area.longitude]}
                        />
                    )}
                    <Placemark geometry={[]}/>
                </Map>
            </div>
        </YMaps>
    );
};