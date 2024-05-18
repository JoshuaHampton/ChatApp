import Grid from "@mui/material/Grid";

function ImageGen(height){
    let xs=false,sm=8,md=7;

    let img = {};
    img.url = "https://source.unsplash.com/random?wallpapers";
    img.src = "url("+img.url+")";
    img.alt = "Random Background Image";
    img.title = "Random Unslpash Background Image";
    img.repeat = "no-repeat";
    img.size = "cover";
    img.position = "center";

    return (
        <>
            <Grid
            item
            xs={xs}
            sm={sm}
            md={md}
            sx={{
                height: height,
                backgroundImage: img.src,
                backgroundRepeat: img.repeat,
                backgroundColor: (t) =>
                t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: img.size,
                backgroundPosition: img.position,
            }}
            />
        </>
    )
}

export default ImageGen;    