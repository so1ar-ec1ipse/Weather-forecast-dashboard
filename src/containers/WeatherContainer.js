import React from 'react'
import styled from '@emotion/styled'
import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
import useWeather from '../hooks/useWeather'
import Grid from '@material-ui/core/Grid'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 6rem;
`

const InfoText = styled.h4`
  color: white;
  text-align: center;
`

const useStyles = makeStyles({
  card: {
    height: 404
  }
})

const WeatherContainer = ({ city }) => {
  const { weather, forecast, isLoading, isError } = useWeather(city)
  const classes = useStyles()

  const WeatherAndForecast = () => {
    return (
      <>
        {!isError && forecast.temp && weather.main ? (
          <Grid container spacing={3}>
            <Weather
              city={weather.name}
              coord={weather.coord}
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
            <Grid item xs={12} md={8}>
              <Forecast forecast={forecast} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent>mapa</CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <InfoText>Cant find results for '{city}'</InfoText>
        )}
      </>
    )
  }

  return (
    <>
      <Container>
        {isLoading ? <InfoText>Loading....</InfoText> : <WeatherAndForecast />}
      </Container>
    </>
  )
}

export default WeatherContainer
