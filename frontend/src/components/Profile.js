import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Posts from './Posts';

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6} bg="gray.700">
        <Image
          borderRadius="full"
          boxSize="80px"
          src="https://media.wired.com/photos/652964d5692bcba93cb51419/master/w_1920,c_limit/REI-Co-op-Cycles-DRT-e3.1-Electric-Mountain-Bike-Review-Gear.jpg"
          alt="Profile"
        />
        <Text>Charul's E-Bike Company</Text>
        <Text fontSize="lg" color="gray.400">
          Save the Environment!
        </Text>
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;
