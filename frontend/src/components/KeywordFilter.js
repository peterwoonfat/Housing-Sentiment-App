import React from "react";

function KeywordFilter({handleChange}) {
  // const [keywordData, setKeywordData] = useState([])

  // useEffect(() => {
  //     postKeywords().then((keywordData) => setKeywordData(keywordData));
  // }, []);

  // function getKeywords(checkboxName) {
  //     var checkboxes = document.getElementsByName(checkboxName);
  //     var checkboxesChecked = [];
  //     // loop over all checkboxes and store the checked ones in an array
  //     for (var i=0; i< checkboxes.length; i++) {
  //         if (checkboxes[i].checked) {
  //             checkboxesChecked.push(checkboxes[i].value);
  //         }
  //     }
  //     // Return the array of checked checkboxes if it is non-empty, or null
  //     return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  // }
  

  // const handleChange = (e) => {
  //     var filteredKeywords = getKeywords("KeywordCheckBox");
  //     console.log("Selected keywords: " + filteredKeywords)
  //     postKeywords(JSON.stringify(filteredKeywords)).then((response) => response.json()).then((data) => {
  //         const keywordData = JSON.parse(data.posts)
  //         console.log('Keyword occurrences data: ' + keywordData)
  //         setKeywordData(keywordData);
  //     });
  // }

  return (
      <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown" aria-expanded="false">
          Keywords Filter
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={handleChange}>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Affordable Housing" name="KeywordCheckBox" id="KeywordCheckBox1" />
                          <label className="form-check-label" htmlFor="CheckBox1">Affordable Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Housing" name="KeywordCheckBox" id="KeywordCheckBox2" />
                          <label className="form-check-label" htmlFor="CheckBox2">Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Market Housing" name="KeywordCheckBox" id="KeywordCheckBox3" />
                          <label className="form-check-label" htmlFor="CheckBox3">Market Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Homeless shelters" name="KeywordCheckBox" id="KeywordCheckBox4" />
                          <label className="form-check-label" htmlFor="CheckBox4">Homeless shelters</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Transitional Housing" name="KeywordCheckBox" id="KeywordCheckBox5" />
                          <label className="form-check-label" htmlFor="CheckBox5">Transitional Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Social Housing" name="KeywordCheckBox" id="KeywordCheckBox6" />
                          <label className="form-check-label" htmlFor="CheckBox6">Social Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Subsidized Housing" name="KeywordCheckBox" id="KeywordCheckBox7" />
                          <label className="form-check-label" htmlFor="CheckBox7">Subsidized Housing</label>
                      </div>
                  </label>
              </li>
              <li>
                  <label className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="Non-Market Housing" name="KeywordCheckBox" id="KeywordCheckBox8" />
                          <label className="form-check-label" htmlFor="CheckBox8">Non-Market Housing</label>
                      </div>
                  </label>
              </li>
          </ul>
      </div>
  );
}
export default KeywordFilter;