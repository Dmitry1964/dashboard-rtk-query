import cls from './pagination.module.scss'


const Pagination = () => {
    return (
        <div className={cls.pagination}>
            <button className={cls.button}>1</button>
            <button className={cls.button}>2</button>
            <button className={cls.button}>3</button>
            <button className={cls.button}>4</button>
            <button className={cls.button}>5</button>
        </div>
    )
}

export default Pagination