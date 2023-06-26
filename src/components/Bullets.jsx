import { SpanBullet } from "./SpanBullet";
export const Bullets = () => {

    const handleClick = () => {
        alert("hola")
    }

    return(
        <div style={{ display: "flex", gap: "10px"}}>
            <SpanBullet pathname="/"/>
            <SpanBullet pathname="/nosotros"/>
            <SpanBullet pathname="/servicios"/>
            <SpanBullet pathname="/contacto"/>
        </div>
    )
}