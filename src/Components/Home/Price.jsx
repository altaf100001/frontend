import { Avatar, Box, Button, Card, Checkbox, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import EastIcon from '@mui/icons-material/East';
const Price = ({ choose }) => {
    const [price, setPrice] = useState(0)
    useEffect(() => {
        let count = 0;
        choose.map((v) => {
            count = count + Number(v.price)

        })

        setPrice(count)

    }, [choose])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            borderBottom: "0.5px solid #e8eee0",
            gap: 2
        }}>

            <Card
                sx={{
                    // minWidth: "250px",
                    border: "1px solid #E8EEE0",
                    borderRadius: "10px",
                }}
            >
                <Box sx={{
                    p: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderBottom: "0.5px solid #e8eee0"
                }}>
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        color="success"
                        sx={{ color: "#EEEEEE" }}
                    />
                    <Typography variant="h6" component="h6" fontWeight={500} ml={7} >3 Days</Typography>
                </Box>

                <Typography variant="h4" component="h4" fontWeight={700} ml={2} mt={2}> &#8377;{Math.floor(price - (price * 0.2))}
                    <Typography variant="body1" component="span"  > / per Meal</Typography>

                </Typography>
                <Typography variant="h6" component="p" fontWeight={600} mb={2} ml={2} mt={1} fontSize={14} color={"#8f8f8f"}>&#8377;  {Math.floor(price * 3 - ((price * 3) * 0.2))} for 3 days

                    <Typography variant="body1" component="span" color={'#38b4A8'} fontSize={14} ml={5}> 20% off</Typography>



                </Typography>

                <Divider />

                <Typography variant="h6" component="p" mb={2} ml={2} mt={1} fontSize={"large"} color={"#38b4A8"}> <DeliveryDiningIcon color="#38b4A8" />


                    <Typography variant="body1" component="span" color={'black'} fontSize={16} ml={5}> Free Delivery</Typography>

                </Typography>
            </Card>
            <Card
                sx={{
                    minWidth: "250px",
                    border: "1px solid #E8EEE0",
                    borderRadius: "10px",
                }}
            >
                <Box sx={{
                    p: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderBottom: "0.5px solid #e8eee0"
                }}>
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        color="success"
                        sx={{ color: "#EEEEEE" }}
                    />
                    <Typography variant="h6" component="h6" fontWeight={500} ml={7} >7 Days</Typography>
                </Box>

                <Typography variant="h4" component="h4" fontWeight={700} ml={2} mt={2}> &#8377;{Math.floor(price - (price * 0.3))}
                    <Typography variant="body1" component="span"  > / per Meal</Typography>

                </Typography>
                <Typography variant="h6" component="p" fontWeight={600} mb={2} ml={2} mt={1} fontSize={14} color={"#8f8f8f"}>&#8377;  {Math.floor(price * 7 - ((price * 7) * 0.3))} for 7 days

                    <Typography variant="body1" component="span" color={'#38b4A8'} fontSize={14} ml={5}> 30% off</Typography>



                </Typography>

                <Divider />

                <Typography variant="h6" component="p" mb={2} ml={2} mt={1} fontSize={"large"} color={"#38b4A8"}> <DeliveryDiningIcon color="#38b4A8" />


                    <Typography variant="body1" component="span" color={'black'} fontSize={16} ml={5}> Free Delivery</Typography>

                </Typography>
            </Card>
            <Card
                sx={{
                    minWidth: "250px",
                    border: "1px solid #E8EEE0",
                    borderRadius: "10px",
                }}
            >
                <Box sx={{
                    p: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderBottom: "0.5px solid #e8eee0"
                }}>
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        color="success"
                        sx={{ color: "#EEEEEE" }}
                    />
                    <Typography variant="h6" component="h6" fontWeight={500} ml={7} >14 Days</Typography>
                </Box>

                <Typography variant="h4" component="h4" fontWeight={700} ml={2} mt={2}> &#8377;{Math.floor(price - (price * 0.4))}
                    <Typography variant="body1" component="span"  > / per Meal</Typography>

                </Typography>
                <Typography variant="h6" component="p" fontWeight={600} mb={2} ml={2} mt={1} fontSize={14} color={"#8f8f8f"}>&#8377;  {Math.floor(price * 14 - ((price * 14) * 0.4))} for 14 days

                    <Typography variant="body1" component="span" color={'#38b4A8'} fontSize={14} ml={5}> 40% off</Typography>



                </Typography>

                <Divider />

                <Typography variant="h6" component="p" mb={2} ml={2} mt={1} fontSize={"large"} color={"#38b4A8"}> <DeliveryDiningIcon color="#38b4A8" />


                    <Typography variant="body1" component="span" color={'black'} fontSize={16} ml={5}> Free Delivery</Typography>

                </Typography>
            </Card>
            <Card
                sx={{
                    minWidth: "250px",
                    border: "1px solid #E8EEE0",
                    borderRadius: "10px",
                }}
            >
                <Box sx={{
                    p: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderBottom: "0.5px solid #e8eee0"
                }}>
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        color="success"
                        sx={{ color: "#EEEEEE" }}
                    />
                    <Typography variant="h6" component="h6" fontWeight={500} ml={7} >30 Days</Typography>
                </Box>

                <Typography variant="h4" component="h4" fontWeight={700} ml={2} mt={2}> &#8377;{Math.floor(price - (price * 0.5))}
                    <Typography variant="body1" component="span"  > / per Meal</Typography>

                </Typography>
                <Typography variant="h6" component="p" fontWeight={600} mb={2} ml={2} mt={1} fontSize={14} color={"#8f8f8f"}>&#8377;  {Math.floor(price * 30 - ((price * 30) * 0.5))} for 50 days

                    <Typography variant="body1" component="span" color={'#38b4A8'} fontSize={14} ml={5}> 20% off</Typography>



                </Typography>

                <Divider />

                <Typography variant="h6" component="p" mb={2} ml={2} mt={1} fontSize={"large"} color={"#38b4A8"}> <DeliveryDiningIcon color="#38b4A8" />


                    <Typography variant="body1" component="span" color={'black'} fontSize={16} ml={5}> Free Delivery</Typography>

                </Typography>
            </Card>
        </Box>
    )
}

export default Price