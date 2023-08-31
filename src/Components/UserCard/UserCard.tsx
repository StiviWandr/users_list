import styles from './UserCard.module.css'
import Helmet from "../../assets/helmet.svg"
type UserCardProps = {
    number: number,
    name: string,
    time: number,
    speed: number,
    image?: string,
    active: boolean,
    onClick: () => void
}

export function UserCard (props: UserCardProps) {
    return (
        <>
            <div className={styles.usercard} onClick={props.onClick}>
                <div className={styles.number}>{props.number}</div>
                <img className={`${styles.img} ${props.active? styles.activeImg:""} `} src={props.image ?? Helmet}/>
                <div className={styles.userinfo}>
                    <div className={styles.name}>{props.name.length > 10 ? props.name.slice(0, 10) + '...' : props.name}</div>
                    <div className={styles.raceinfo}>
                        <span className={styles.time}>{props.time}</span>
                        <span> | </span>
                        <span className={styles.speed}>{props.speed} км/ч</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}