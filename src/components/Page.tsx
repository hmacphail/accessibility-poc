import {useMemo, useState} from "react";
import {Divider, Grid, Link, Stack, SxProps, Typography} from "@mui/material";
import bulbOff from "../images/bulb_off.png";
import bulbOn from "../images/bulb_on.png";
import exteriorDoorClosed from "../images/exterior_door_closed.png";
import exteriorDoorOpen from "../images/exterior_door_open.png";
import exteriorSwitchOff from "../images/exterior_switch_off.png";
import exteriorSwitchOn from "../images/exterior_switch_on.png";
import interiorDoorClosed from "../images/interior_door_closed.png";
import interiorDoorOpen from "../images/interior_door_open.png";
import interiorSwitchOff from "../images/interior_switch_off.png";
import interiorSwitchOn from "../images/interior_switch_on.png";

const hoverStyle: SxProps = { ":hover": { cursor: "pointer" }};

function Page() {
    const [interiorSwitch, setInteriorSwitch] = useState(false);
    const [interiorDoor, setInteriorDoor] = useState(false);
    const [exteriorSwitch, setExteriorSwitch] = useState(false);
    const [exteriorDoor, setExteriorDoor] = useState(false);

    const bulb = useMemo(() => {
        return interiorSwitch || interiorDoor || exteriorSwitch || exteriorDoor;
    }, [exteriorDoor, exteriorSwitch, interiorDoor, interiorSwitch])

    return (
        <>
            <img src="" alt="Room"/>
            <Divider/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography typography="h5">Interior View</Typography>
                    <Stack direction="row" spacing={2}>
                        <Stack spacing={1}>
                            <img
                                src={bulb ? bulbOn : bulbOff}
                                width={50}
                                alt="Interior Bulb"
                            />
                            <Link sx={hoverStyle}>
                                <img
                                    src={interiorSwitch ? interiorSwitchOn : interiorSwitchOff}
                                    width={50}
                                    alt="Interior Switch"
                                    onClick={() => setInteriorSwitch(!interiorSwitch)}
                                />
                            </Link>
                        </Stack>
                        <Link sx={hoverStyle}>
                            <img
                                src={interiorDoor ? interiorDoorOpen : interiorDoorClosed}
                                width={100}
                                alt="Interior Door"
                                onClick={() => setInteriorDoor(!interiorDoor)}
                            />
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Typography typography="h5">Exterior View</Typography>
                    <Stack direction="row" spacing={2}>
                        <Stack spacing={1}>
                            <img
                                src={bulb ? bulbOn : bulbOff}
                                width={50}
                                alt="Exterior Bulb"
                            />
                            <Link sx={hoverStyle}>
                                <img
                                    src={exteriorSwitch ? exteriorSwitchOn : exteriorSwitchOff}
                                    width={50}
                                    alt="Exterior Switch"
                                    onClick={() => setExteriorSwitch(!exteriorSwitch)}
                                />
                            </Link>
                        </Stack>
                        <Link sx={hoverStyle}>
                            <img
                                src={exteriorDoor ? exteriorDoorOpen : exteriorDoorClosed}
                                width={100}
                                alt="Exterior Door"
                                onClick={() => setExteriorDoor(!exteriorDoor)}
                            />
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default Page;