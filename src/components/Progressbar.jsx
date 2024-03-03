import { Box, Flex, Input, Progress, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Progressbar({ milestones }) {

    // State for Progressbar Dynamic Value
    const [value, setValue] = useState(0)

    // total milstone length and add 1 because for client requierment
    const totalMilstone = milestones.length + 1

    // Percentage progress value for each milestone
    const milestoneLength = 100 / totalMilstone

    // handlerValue for dynamic progress functionality
    const handlerValue = (e) => {

        // Client input value
        const ammount = e.target.value

        for (let i = 0; i < milestones.length; i++) {

            // if client input value is less then first milestone
            if (ammount <= milestones[i]) {

                // set progress bar value
                setValue((ammount * milestoneLength) / milestones[i])

                // break for don't permisiion to calculate next 
                break

            }
            // if client input value is greater then running milestone and less then next milestone
            else if (ammount > milestones[i] && ammount <= milestones[i + 1]) {

                // What TK/USD is target or need for running milestone
                let target = milestones[i + 1] - milestones[i]

                // What percentage is used for running milestone
                let runningPercentage = (((ammount - milestones[i]) * milestoneLength) / target)

                // What percentage has completed for previous milestone
                let previousPercentage = milestoneLength * (i + 1)

                // Addition: Which percentage is complete in total milestone
                let newPercentage = runningPercentage + previousPercentage

                // set progress bar value by Which percentage is complete in total
                setValue(newPercentage)

                // break for don't permisiion to calculate next 
                break

            } 
            // if client input value is greater or equal then last milestone
            else if (ammount >= milestones[milestones.length - 1]) {

                // if user input is greater then total milestone then set 100%
                setValue(100)

                // break for don't permisiion to calculate next 
                break
            }
        }

    }

    return (
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'} w={'100%'} border={'1px'}>

            <Text>{value}</Text>
            <Progress value={value} w={'300px'} />

            <Flex w={'300px'} justifyContent={'space-between'}>
                <Text></Text>
                {
                    milestones.map((_, i) => <Text
                        key={i}
                    >
                        {i + 1}
                    </Text>)
                }
                <Text></Text>
            </Flex>

            <Box>
                <Input
                    onChange={handlerValue}
                />
            </Box>
        </Flex>
    )
}
