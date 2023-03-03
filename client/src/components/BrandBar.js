import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', height: "55px"}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    <p>{brand.name}</p>
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;