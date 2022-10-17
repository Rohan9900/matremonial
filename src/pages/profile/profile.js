import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ListingCard from '../../components/listingCard';
import { Grid } from '@mui/material';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

const steps = [
    {
        label: 'ABOUT HER',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'LIFESTYLE & APPEARANCE',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'BACKGROUND',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {
        label: 'HER FAMILY',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'EDUCATION & CAREER',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'WHAT SHE IS LOOKING FOR',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },

];

export default function Profile() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [translation, setTranslation] = React.useState(3);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTranslation(66 * (activeStep + 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setTranslation(66 * (activeStep - 1));

    };

    const handleReset = () => {
        setActiveStep(0);
        setTranslation(3);

    };

    return (
        <>
            <Navbar />
            <Grid sx={{ mt: 3 }} container spacing={2} justifyContent={"center"} alignItems={"center"}>
                <ListingCard />
                <Box sx={{ maxWidth: "80%" }} justifyContent={"left"}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>

                                <StepLabel

                                >
                                    {index == 0 && activeStep < steps.length && <div style={{ height: "25px", width: "25px", backgroundImage: `url(https://toppng.com/uploads/preview/bride-and-groom-11563541950bvkwuigbwn.png)`, display: "inline-block", transition: "2s", borderRadius: "50%", transform: `translate(-32px,${translation}px)`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}></div>}
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </Grid>
            <Footer />
        </>

    );
}
