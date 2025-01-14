import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


// const openWebsite = () => {
//   const url = 'https://github.com/fadhlanputra'; // Ganti dengan URL tujuan Anda
//   Linking.openURL(url).catch((err) =>
//     console.error('Failed to open URL:', err)
//   );
// };


export default function HomeScreen() {
  return (
    
    <SafeAreaView>
      <ScrollView>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/kurangInpo.jpg')} style={styles.reactLogo}/>
          <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold',}}>hehe</Text>
          <Text style={{textAlign: 'center', fontSize: 19, marginTop: 10, color: 'grey'}}> "Hi mi nem is Fadhlan Putra, ai em manusia, ai em a perogramer, ai em pelajar, ai em pelaying gem, ai em kurang ingpo aku kang 😂😂"</Text>
          <TextInput placeholder='isi pin atm' style={{borderWidth: 1, marginBottom: 20, marginTop: 20,}}></TextInput>
          <Button
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View> */}

          {/* <Text style={tw`text-bold text-xl mt-5`}>&lt; Profile</Text> */}
          
          {/* <View style={tw`items-center`}> */}
            <ImageBackground style={tw`w-full h-170 mb-150`} source={require('../../assets/images/rusdi.jpg')}>


          <View style={tw`bg-yellow-500 rounded-t-3xl mt-140 px-10 h-350`}>
            <Text style={tw`font-extrabold text-5xl mt-10`}>Rusdi{"\n"}Barbeshop</Text>

            <View style={tw`flex flex-row gap-5`}>
              <Text>Barber</Text>
              <Text><Entypo name='location-pin'/>Ngawi</Text>
            </View>

            <View style={tw`flex flex-row mt-5 justify-between`}>
              <Text style={tw`font-extrabold text-2xl`}>542</Text>
              <Text style={tw`font-extrabold text-2xl`}>98K</Text>
              <Text style={tw`font-extrabold text-2xl`}>100K</Text>
            </View>

            <View style={tw`flex flex-row justify-between`}>
              <Text style={tw`text-xl`}>Following</Text>
              <Text style={tw`text-xl`}>Following</Text>
              <Text style={tw`text-xl`}>Likes</Text>
            </View>

            <Link href="/settings/consultation" style={tw`bg-black p-4 rounded w-25 my-8`}>
              <Text style={tw`text-white font-bold text-center`}>Hire Me</Text>
            </Link>

            <View style={tw`flex-row mr-10 gap-3 mb-8`}>
              <Entypo name='facebook' size={30}/>
              <Entypo name='linkedin' size={30}/>
              <Entypo name='twitter' size={30}/>
            </View>

            <Text style={tw`font-extrabold text-3xl`}>Tentang</Text>
            <Text>Rusdi adalah seorang tukang barbershop</Text>

            <Text style={tw`font-extrabold text-3xl`}>Projects</Text>
            <Text>Mencukur rambut orang</Text>

            <Text style={tw`font-extrabold text-3xl`}>Tools</Text>
            <View style={tw`flex flex-row gap-5 mr-1`}>
              <Text>Alat cukur</Text>
              <Text>Kaca</Text>
            </View>
            
          </View>
        
    </ImageBackground>
    {/* </View> */}

      </ScrollView>
    </SafeAreaView>

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
  },
});
