export const CardInfoHover = ({ text, bold, link }) => {
    return(
        <>
        <div style={{ 
            position: 'relative', 
            top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', 
            fontSize: '24px', display: 'flex', 
            }}>
            <a href={link} target='_blank' style={{display: 'flex',color: '#fff', textDecoration: 'none', height: 'auto' }}>
            <h3 style={{ margin: 0}}>{bold}</h3>
            <h3 style={{ margin: 0, fontWeight: 200}}>{text}</h3>
            </a>
        </div>
            
        </>
    )
}