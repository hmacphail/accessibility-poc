import {useState} from "react";
import {Divider, Grid, Stack, Typography} from "@mui/material";

function Page() {
    const [interiorSwitch, setInteriorSwitch] = useState(false);
    const [interiorDoor, setInteriorDoor] = useState(false);
    const [interiorBulb, setInteriorBulb] = useState(false);
    const [exteriorSwitch, setExteriorSwitch] = useState(false);
    const [exteriorDoor, setExteriorDoor] = useState(false);
    const [exteriorBulb, setExteriorBulb] = useState(false);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack>
                        <span>Interior View</span>
                        <span>{interiorSwitch}</span>
                        <span>{interiorDoor}</span>
                        <span>{interiorBulb}</span>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack>
                        <span>Exterior View</span>
                        <span>{exteriorSwitch}</span>
                        <span>{exteriorDoor}</span>
                        <span>{exteriorBulb}</span>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default Page;