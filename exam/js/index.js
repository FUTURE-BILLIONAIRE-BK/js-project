function TagName(tagName, className, text)
{
  var tagName = document.createElement(tagName)
  tagName.className = className
  tagName.textContent = text
  return tagName
}

const FilmList = document.querySelector('ul')
const template = document.createDocumentFragment() 

for(let i = 0; i<=films.length - 1; i++)
{
  const FilmCard = TagName('li', 'movies__item movie-card', films[i].id)
  const FilmImg = TagName('img', 'movie-card__poster')
  FilmImg.src = films[i].poster
  const FilmContent = TagName('div', 'movie-card__content')
  const FilmHeading = TagName('h3', 'movie-card__title', films[i].title)
  const FilmLink = TagName('a', 'movie-card__link')
  const FilmDesc = TagName('p', 'movie-card__overview', films[i].overview)
  const Listgenres = TagName('ul', 'movie-card__genres')
  for(let g = 0; g<= films[i].genres.length - 1; g++)
  {
    const Itemgenres = TagName('li', 'movie-card__genre badge', films[i].genres[g])
    Listgenres.append(Itemgenres)
  }
  const FilmReleaseDate = TagName('time', 'movie-card__release-date', films[i].release_date)
  FilmHeading.append(FilmLink)
  FilmContent.append(FilmImg, FilmHeading, FilmDesc, Listgenres, FilmReleaseDate)
  FilmCard.append(FilmContent)
  template.append(FilmCard)
}
FilmList.append(template)

const Select = document.querySelector('select')

for(let i = 0; i<=genres.length - 1; i++)
{
  const option = document.createElement('option')
  option.textContent = genres[i].name
  Select.append(option)
}

const Form = document.querySelector('form')

Form.addEventListener('submit', func)
function func(e)
{
  e.preventDefault();
  FilmList.innerHTML = ''
  for(let i = 0; i<=films.length - 1; i++)
  {
    if(films[i].genres.includes(Select.value))
    {
      const FilmCard = TagName('li', 'movies__item movie-card', films[i].id)
      const FilmImg = TagName('img', 'movie-card__poster')
      FilmImg.src = films[i].poster
      const FilmContent = TagName('div', 'movie-card__content')
      const FilmHeading = TagName('h3', 'movie-card__title', films[i].title)
      const FilmLink = TagName('a', 'movie-card__link')
      const FilmDesc = TagName('p', 'movie-card__overview', films[i].overview)
      const Listgenres = TagName('ul', 'movie-card__genres')
      for(let g = 0; g<= films[i].genres.length - 1; g++)
      {
        const Itemgenres = TagName('li', 'movie-card__genre badge', films[i].genres[g])
        Listgenres.append(Itemgenres)
      }
      const FilmReleaseDate = TagName('time', 'movie-card__release-date', films[i].release_date)
      FilmHeading.append(FilmLink)
      FilmContent.append(FilmImg, FilmHeading, FilmDesc, Listgenres, FilmReleaseDate)
      FilmCard.append(FilmContent)
      template.append(FilmCard)
    }
    else if(Select.value =='All')
    {
      for(let i = 0; i<=films.length - 1; i++)
      {
        const FilmCard = TagName('li', 'movies__item movie-card', films[i].id)
        const FilmImg = TagName('img', 'movie-card__poster')
        FilmImg.src = films[i].poster
        const FilmContent = TagName('div', 'movie-card__content')
        const FilmHeading = TagName('h3', 'movie-card__title', films[i].title)
        const FilmLink = TagName('a', 'movie-card__link')
        const FilmDesc = TagName('p', 'movie-card__overview', films[i].overview)
        const Listgenres = TagName('ul', 'movie-card__genres')
        for(let g = 0; g<= films[i].genres.length - 1; g++)
        {
          const Itemgenres = TagName('li', 'movie-card__genre badge', films[i].genres[g])
          Listgenres.append(Itemgenres)
        }
        const FilmReleaseDate = TagName('time', 'movie-card__release-date', films[i].release_date)
        FilmHeading.append(FilmLink)
        FilmContent.append(FilmImg, FilmHeading, FilmDesc, Listgenres, FilmReleaseDate)
        FilmCard.append(FilmContent)
        template.append(FilmCard)
      }
      FilmList.append(template)
    }
    else
    {
      continue
    }
  }
  FilmList.append(template)
}
