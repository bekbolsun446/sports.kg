import classes from "./categories.module.scss";

export default function Categories() {
    const categories = [
        {
            id: 1,
            title: 'ФУТБОЛ',
            value: ''
        },
        {
            id: 2,
            title: 'ФУТЗАЛ',
            value: ''
        },
        {
            id: 3,
            title: 'ВОЛЕЙБОЛ',
            value: ''
        },
        {
            id: 4,
            title: 'БОРЬБА',
            value: ''
        },
        {
            id: 5,
            title: 'БОКС',
            value: ''
        },
        {
            id: 6,
            title: 'КӨК БӨРҮ',
            value: ''
        },
        {
            id: 7,
            title: 'НАСТОЛЬНЫЙ ТЕННИС',
            value: ''
        },
        {
            id: 8,
            title: 'ШАХМАТ',
            value: ''
        }
    ]
    return (
        <div className={classes.categories}>
            {categories.map(category =>
                <span
                    className={classes.category}
                    key={category.id}
                >
                    {category.title}
                </span>
            )}
        </div>
    );
};