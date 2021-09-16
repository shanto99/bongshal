import React from "react";
import {Box, Grid, Stepper, Step, StepLabel,Button,
    TextField, Typography} from "@material-ui/core";

class VendorForm extends React.Component {
    getSteps() {
        return ['Basic info', 'Contact info', 'Product info', 'Services'];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Select campaign settings...';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }
    render() {
        return (
            <Box style={{maxWidth: '800px', margin: '0 auto'}} width="100" p={2}>
                <Box mb={4}>
                    <Typography variant="h6">
                        Create a vendor
                    </Typography>
                </Box>
                <Stepper activeStep={0} alternativeLabel>
                    {this.getSteps().map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        );
    }
}

export default VendorForm;
