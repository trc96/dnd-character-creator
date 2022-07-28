const AbilitySelection = () => {
  return (
    <div>
      <div>
        <div className="website-background">
          <div className="header-container">
            <h1 className="h1-website-title">D&D 5e Character Creator</h1>
            <h2 className="h2-website-title">Class Selection</h2>
            <div className="button-container">
              <Link className="nav-btns" to="/RaceSelection">
                Go Back
              </Link>

              <Link className="nav-btns" to="/FeatSelection">
                Next
              </Link>
            </div>
          </div>
          {/* {abilitiesMapped} */}
        </div>
      </div>
    </div>
  );
};

export default AbilitySelection;
