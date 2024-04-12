import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoviesCards = (props) => {
    return(
        <TouchableOpacity>
            <Image style={StyleSheet.img} source={props.movieURL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,

    }
})