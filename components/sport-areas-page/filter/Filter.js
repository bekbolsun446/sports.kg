import classes from "./filter.module.scss";
import {useState} from "react";

export default function Filter({categories}) {

    const [category, setCategory] = useState(categories[4])

    const [price, setPrice] = useState({
        from: 0,
        to: 0
    })

    return (
        <div className={classes.filter}>
            <select name="" id="" className={classes.category}>
                <option value="">Выберите вид спорта</option>
                {categories.map(category =>
                    <option key={category.id} value="">{category.title}</option>
                )}
            </select>
            <div className={classes.price}>
                <p className={classes.priceTitle}>Цена</p>
                <div className={classes.from}>
                    <p className={classes.fromTitle}>От</p>
                    <input type="number"/>
                </div>
                <div className={classes.from}>
                    <p className={classes.fromTitle}>До</p>
                    <input type="number"/>
                </div>
            </div>
            {category?.types.length > 0 &&
                <div className={classes.types}>
                    {category.types.map(type =>
                        <label key={type.id}>
                            <input type="checkbox"/>
                            {type?.title}
                        </label>
                    )}
                </div>
            }
            {category?.infrastructures.length > 0 &&
                <div className={classes.infrastructures}>
                    {category.infrastructures.map(inf =>
                        <label key={inf.id}>
                            <input type="checkbox"/>
                            {inf?.title}
                        </label>
                    )}
                </div>
            }
            <button className={classes.clear}>Очистить</button>
        </div>
    );
};