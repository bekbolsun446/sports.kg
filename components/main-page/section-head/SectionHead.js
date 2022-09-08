import classes from "./SectionHead.module.scss";
import Link from "next/link";

export default function SectionHead({title, linkTitle, link}) {
    return (
        <div className={classes.head}>
            <h4 className={classes.title}>{title}</h4>
            <Link href={link}>
                <a className={classes.all_link}>{linkTitle}</a>
            </Link>
        </div>
    );
};

