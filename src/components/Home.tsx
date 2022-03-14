import { Grid } from "@mui/material";

export const Home = (props: any) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2>Accueil</h2>
            </Grid>
            <Grid item xs={12}>
                Bienvenue sur mon appli web
            </Grid>
        </Grid>
    );
}
