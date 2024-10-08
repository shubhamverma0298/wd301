import { useMembersState } from '../../context/members/context';
import { useCommentsState } from '../../context/comment/context';
import { CommentData } from '../../context/comment/types';
export default function CommentList() {
  const commentState = useCommentsState();
  const memberState = useMembersState();
  const FormatedTimeDate = (date: string) => {
    const newDate = new Date(date);
    const formatDate = newDate.toDateString();
    let hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formatedTime = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${newformat}`;
    return `${formatDate} ${formatedTime}`;
  };
  const { comments, isLoading, isError, errorMessage } = commentState;
  console.log("Comments from the commentlist using commentstate",commentState)
  console.log("Comments in the webpage",comments)
  if (comments.length === 0 && isLoading) {
    return <p className='mt-3 font-bold text-yellow-400'>Loading....</p>;
  }
  if (isError) {
    return <p className='mt-3 text-pink-500'>{errorMessage}</p>;
  }
  if (comments.length < 1) {
    return (
      <div>
        <h4>No Comments Yet</h4>
      </div>
    );
  }
  const retriveComment = (owner: any) => {
    const assignee = memberState?.members?.filter(
      (member) => member.id === owner
    )?.[0];
    return assignee?.name;
  };
  return (
    <div className="mt-3">
    <h2 className="font-bold">Comments</h2>
    {commentState.comments.map((comment: CommentData) => {
      return (
        <div className="comment my-3 rounded p-3 bg-purple-400">
          <div className="flex justify-between">
            <h2 className="font-semibold">
              Member : {retriveComment(comment.owner)}
            </h2>
            <p className="text-sm font-semibold">
              {FormatedTimeDate(comment.createdAt)}
              </p>
            </div>
            <p>{comment.description}</p>
          </div>
       );
      })}
    </div>
  );
}