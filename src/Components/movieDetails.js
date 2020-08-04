import React from "react";
import test from "./test.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";

// Class component which describes the details of a specific movie
class MovieDetails extends React.Component {
  
  componentDidMount() {
    this.movie = this.props.location.state;
  }
  // take the arguments from the props
  state = {
    movie: this.props.location.state,
  };

  render() {
    return (
      <Container>
        <Row>
          <section className="movieDetails">
            <div className="content">
              <Col xs={4}>
                <div className="image">
                  <img src={this.state.movie.movie.imgPath} alt="" />
                </div>
              </Col>
              <Col xs={6} dir="rtl">
                <div className="details">
                  <h1>{this.state.movie.movie.title}</h1>
                  <div className="subDetails">
                    <span>{this.state.movie.movie.releaseDate} | </span>
                    <span>{this.state.movie.movie.duration} דקות | </span>
                    {this.state.movie.movie.genres.map((genre, idx) => {
                      if (idx < this.state.movie.movie.genres.length - 1){
                        return <span>{genre}, </span>
                      }
                      else{
                        return <span>{genre} </span>
                      }
                      
                    })}
                    <div>
                      <Typography variant="body1" gutterBottom>
                        {this.state.movie.movie.description}
                      </Typography>
                    </div>
                    {/* <div>
                      <span>Starring: </span>
                      {this.state.movie.movie.cast.map((author, idx) => {
                        if (idx !== test - 1) {
                          return <span>{author}, </span>;
                        } else {
                          return <span>{author}</span>;
                        }
                      })}
                    </div> */}
                  </div>
                </div>
              </Col>
            </div>
          </section>
        </Row>
      </Container>
    );
  }
}

export default MovieDetails;
