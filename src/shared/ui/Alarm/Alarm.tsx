import * as cls from './alarm.module.scss'
const Alarm = () => {
    return (
        <section className={cls.alarm}>
            <div className={cls.alarm__text}>
                Программа придумает 10 паролей, после генерации вы можете их скопировать либо скачать .txt файлом
            </div>
        </section>
    )
}

export default Alarm;