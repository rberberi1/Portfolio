function FilterButton(props){
  return(
  <button data-category={props.type}>{props.name}</button>
  );
}

export default FilterButton;