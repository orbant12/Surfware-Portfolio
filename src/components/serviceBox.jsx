

const ServiceBox = ({props}) => {

return (
<div className="service-box">
    <div className="service-box-row">
        <div style={{display:"flex",flexDirection:"column"}}>
            <h3 >make your website / web-app stand out with next gen of web development</h3>
        </div>
        <hr style={{width:100,borderStyle:"groove",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)"}} />
        <h3>create a web-app for you or your business <br /> (online shop, restaurant... extc)</h3>
    </div>
    <hr style={{height:20,borderStyle:"groove",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",opacity:0.5}} />
    <div className="service-box-row">
        <h3 >make your website / web-app stand out with next gen of web development</h3>
        <hr style={{width:100,borderStyle:"groove",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)"}} />
        <h3>create a web-app for your business <br /> (online shop, restaurant... extc)</h3>
    </div>
</div>
)}

export default ServiceBox;