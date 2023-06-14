


import React, { useState } from 'react';
import { Avatar, Box, Button, Card, Checkbox, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Price from './Price';

const Food = ({ value }) => {
    const [choose, setChoose] = useState([]);

    const handleChange = (event, data) => {
        const { checked } = event.target;
        if (checked) {
            setChoose((prevChoose) => [...prevChoose, data]);
        } else {
            setChoose((prevChoose) => prevChoose.filter((item) => item !== data));
        }
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    pb: 4,
                    borderBottom: '0.5px solid #e8eee0',
                    gap: 3,
                }}
            >
                {value?.map((data) => (
                    <Card
                        key={data.name}
                        sx={{
                            minWidth: '290px',
                            minHeight: '301px',
                            border: '1px solid #E8EEE0',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Checkbox
                                name={data.name}
                                onChange={(event) => handleChange(event, data)}
                                inputProps={{ 'aria-label': 'controlled' }}
                                color="success"
                                sx={{ color: '#EEEEEE', fontSize: '50px' }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mt: -2,
                                }}
                            >
                                <Avatar
                                    alt="Image Alt Text"
                                    src={data.img}
                                    sx={{ height: '120px', width: '120px' }}
                                />
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    sx={{
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        marginTop: '11px',
                                        textAlign: 'center',
                                        width: '260px',
                                    }}
                                >
                                    {data.name}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignContent: 'flex-end', justifyContent: 'center' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#80b53a',
                                    borderColor: '#80b53a',
                                    '&:hover': { color: '#80b53a', borderColor: '#80b53a' },
                                    mt: 3,
                                    mb: 2,
                                    textAlign: 'end',
                                }}
                            >
                                What You will get &nbsp; <EastIcon />
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>

            {
                choose.length > 0 && <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    py: 4,
                    borderBottom: '0.5px solid #e8eee0',
                    gap: 3,
                }}>

                    <Price choose={choose} />
                </Box>
            }
        </>
    );
};

export default Food;