import { Reducer } from "react";
import { Match, MatchesActions, MatchesAvailableActions, MatchesState } from "./types";

const initialMatches: Match[] = [
  {
    "id": 3,
    "name": "Titans VS Vortex Vipers at Unity Arena, Concordia",
    "location": "Unity Arena, Concordia",
    "sportName": "American Football",
    "endsAt": "2023-06-08T15:25:16.142Z",
    "isRunning": true,
    "teams": [
      {
        "id": 5,
        "name": "Titans"
      },
      {
        "id": 6,
        "name": "Vortex Vipers"
      }
    ]
  },
  {
    "id": 4,
    "name": "Spectral Shadows VS Blitzkrieg at Grand Arena, Metropolis",
    "location": "Grand Arena, Metropolis",
    "sportName": "American Football",
    "endsAt": "2023-06-08T15:25:16.170Z",
    "isRunning": true,
    "teams": [
      {
        "id": 7,
        "name": "Spectral Shadows"
      },
      {
        "id": 8,
        "name": "Blitzkrieg"
      }
    ]
  },
  {
    "id": 8,
    "name": "Blaze Squadron VS Phantom Phantoms at Royal Stadium, Crownville",
    "location": "Royal Stadium, Crownville",
    "sportName": "Field Hockey",
    "endsAt": "2023-06-08T15:25:16.304Z",
    "isRunning": true,
    "teams": [
      {
        "id": 15,
        "name": "Blaze Squadron"
      },
      {
        "id": 16,
        "name": "Phantom Phantoms"
      }
    ]
  },
  {
    "id": 2,
    "name": "Phoenix Rising VS Avalanche at Silvermoon Arena, Lunaris",
    "location": "Silvermoon Arena, Lunaris",
    "sportName": "Basketball",
    "endsAt": "2023-11-03T06:20:30.193Z",
    "isRunning": true,
    "teams": [
      {
        "id": 3,
        "name": "Phoenix Rising"
      },
      {
        "id": 4,
        "name": "Avalanche"
      }
    ]
  },
  {
    "id": 6,
    "name": "Serpents of Fire VS Galaxy Warriors at Unity Arena, Concordia",
    "location": "Unity Arena, Concordia",
    "sportName": "Rugby",
    "endsAt": "2023-06-08T15:25:16.239Z",
    "isRunning": true,
    "teams": [
      {
        "id": 11,
        "name": "Serpents of Fire"
      },
      {
        "id": 12,
        "name": "Galaxy Warriors"
      }
    ]
  },
  {
    "id": 12,
    "name": "Rapid Raptors VS Shadow Assassins at Grand Arena, Metropolis",
    "location": "Grand Arena, Metropolis",
    "sportName": "Cricket",
    "endsAt": "2023-06-08T15:25:16.426Z",
    "isRunning": true,
    "teams": [
      {
        "id": 23,
        "name": "Rapid Raptors"
      },
      {
        "id": 24,
        "name": "Shadow Assassins"
      }
    ]
  },
  {
    "id": 10,
    "name": "Inferno Ignitors VS Stealth Strikers at Victory Park, Triumph City",
    "location": "Victory Park, Triumph City",
    "sportName": "Table Tennis",
    "endsAt": "2023-06-08T15:25:16.363Z",
    "isRunning": true,
    "teams": [
      {
        "id": 19,
        "name": "Inferno Ignitors"
      },
      {
        "id": 20,
        "name": "Stealth Strikers"
      }
    ]
  },
  {
    "id": 5,
    "name": "Fury United VS Lightning Strikes at Unity Arena, Concordia",
    "location": "Unity Arena, Concordia",
    "sportName": "Rugby",
    "endsAt": "2023-06-08T15:25:16.200Z",
    "isRunning": true,
    "teams": [
      {
        "id": 9,
        "name": "Fury United"
      },
      {
        "id": 10,
        "name": "Lightning Strikes"
      }
    ]
  },
  {
    "id": 7,
    "name": "Stormbreakers VS Enigma Enforcers at Aurora Stadium, Dawnville",
    "location": "Aurora Stadium, Dawnville",
    "sportName": "Field Hockey",
    "endsAt": "2023-06-08T15:25:16.269Z",
    "isRunning": false,
    "teams": [
      {
        "id": 13,
        "name": "Stormbreakers"
      },
      {
        "id": 14,
        "name": "Enigma Enforcers"
      }
    ]
  },
  {
    "id": 9,
    "name": "Celestial Chargers VS Rebel Renegades at Golden Gate Park, Aurelia",
    "location": "Golden Gate Park, Aurelia",
    "sportName": "Table Tennis",
    "endsAt": "2023-06-08T15:25:16.337Z",
    "isRunning": false,
    "teams": [
      {
        "id": 17,
        "name": "Celestial Chargers"
      },
      {
        "id": 18,
        "name": "Rebel Renegades"
      }
    ]
  },
  {
    "id": 11,
    "name": "Nova Knights VS Crimson Crushers at Liberty Arena, Freedonia",
    "location": "Liberty Arena, Freedonia",
    "sportName": "Cricket",
    "endsAt": "2023-06-08T15:25:16.395Z",
    "isRunning": false,
    "teams": [
      {
        "id": 21,
        "name": "Nova Knights"
      },
      {
        "id": 22,
        "name": "Crimson Crushers"
      }
    ]
  },
  {
    "id": 1,
    "name": "Thunderbolts VS Dragonslayers at Harmony Stadium, Harmonia",
    "location": "Harmony Stadium, Harmonia",
    "sportName": "Basketball",
    "endsAt": "2023-11-03T06:20:30.363Z",
    "isRunning": true,
    "teams": [
      {
        "id": 1,
        "name": "Thunderbolts"
      },
      {
        "id": 2,
        "name": "Dragonslayers"
      }
    ]
  }
]

export const initialMatchesState: MatchesState = {
  matches: initialMatches,
  isLoading: false,
  isError: false,
  errorMessage: ""
}

export const matchesReducer: Reducer<MatchesState, MatchesActions> = (state = initialMatchesState, action): MatchesState => {
  switch (action.type) {
    case MatchesAvailableActions.FETCH_ALL_MATCHES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case MatchesAvailableActions.FETCH_ALL_MATCHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        matches: action.payload,
      };
    case MatchesAvailableActions.FETCH_ALL_MATCHES_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}