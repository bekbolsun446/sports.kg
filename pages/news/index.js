import Container from "../../container/Container";
import Hero from "../../components/hero/Hero";
import classes from "./news.module.scss";
import Categories from "../../components/news/categories/Categories";
import axios from "axios";
import NewsItem from "../../components/news/newsItem/NewsItem";

export default function MainPage({news}) {

    const areaHero = {
        title: 'НОВОСТИ ',
        description: 'Последние новости только у нас',
        image: 'http://sports.com.kg/img/banner.jpg'
    }

    console.log(news)


    return (
        <Container>
            <Hero areaHero={areaHero}/>
            <div className={[classes.news, 'container'].join(' ')}>
                <Categories/>
                <div
                    className={classes.news_content}
                >{news.results?.map((newsItem, index) =>
                    <div
                        key={index}
                        className={classes.newsItem}
                    >
                        <NewsItem
                            newsItem={newsItem}
                        />
                    </div>
                )}
                </div>
            </div>
        </Container>
    )
}


export const getStaticProps = async () => {

    const resNews = await axios.get('http://admin.sports.com.kg/api/news/category/football/1/')
    const news = resNews.data

    if (!news) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            news: news,
        }
    }
}