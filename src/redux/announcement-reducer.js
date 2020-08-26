const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

const GET_ANNOUNCEMENT = 'GET_ANNOUNCEMENT';

let initialState = {
  announcements: [
    {
      id: 1,
      title: 'Jacob Blake: Two shot dead in third night of Wisconsin unrest',
      description: '',
      dateAdded: '',
    },
    {
      id: 2,
      title:
        'Christchurch shooting: Grief and defiance as victims confront gunman',
      description: '',
      dateAdded: '',
    },
    {
      id: 3,
      title: 'Eigg beach runner stumbles on dinosaur bone',
      description: '',
      dateAdded: '',
    },
    {id: 4, title: 'First announcement', description: '', dateAdded: ''},
    {id: 5, title: 'First announcement', description: '', dateAdded: ''},
    {id: 6, title: 'First announcement', description: '', dateAdded: ''},
    {id: 7, title: 'First announcement', description: '', dateAdded: ''},
    {id: 8, title: 'First announcement', description: '', dateAdded: ''},
  ],

  selectedAnnouncement: [],
};

const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [
          ...state.announcements,
          {
            id: state.announcements.length + 1,
            title: action.title,
            description: action.description,
            dateAdded: new Date(),
          },
        ],
      };

    case DELETE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [
          ...state.announcements.filter(
            (announcement) => announcement.id !== action.id
          ),
        ],
      };

    case GET_ANNOUNCEMENT:
      return {
        ...state,
        selectedAnnouncement: [
          state.announcements.filter(
            (announcement) => announcement.id == action.id
          ),
        ],
      };
    default:
      return state;
  }
};

// ACTION CREATORS

export const addAnnouncement = (title, description) => ({
  type: ADD_ANNOUNCEMENT,
  title,
  description,
});

export const deleteAnnouncement = (id) => ({
  type: DELETE_ANNOUNCEMENT,
  id,
});

export const getAnnouncementById = (id) => ({
  type: GET_ANNOUNCEMENT,
  id,
});

export default announcementReducer;
