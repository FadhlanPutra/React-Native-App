import { Image, ScrollView, Text, View } from 'react-native';
import tw from "twrnc";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Detail() {
    return(

        <SafeAreaView>
            <ScrollView>

                <Text style={tw`text-center font-extrabold text-4xl mx-5`}>Detail Project Siswa RPL 2 😎😎</Text>

                <View style={tw`mx-5`}>
                    <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg `}/>

                    <Text style={tw`text-xl`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti ipsum sunt porro, adipisci hic dolore, laudantium voluptas obcaecati eligendi maiores illo corporis. Obcaecati velit dolorem eaque in tenetur sint.</Text>

                    <Text style={tw`text-xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus sed omnis nemo quas soluta beatae enim quod distinctio, velit sunt sint laboriosam, numquam fugit aspernatur. Modi quo optio aliquid.{"\n \n"}</Text>

                    <Text style={tw`text-xl`}>Rasi Bintang Galak 😫😭</Text>
                </View>

            </ScrollView>
        </SafeAreaView>

    )};