
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import CommentSerializer
from .models import Comment
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

# @api_view(['GET', 'POST'])
# def comment_list(request):


#     if request.method == 'GET':
#         comment = Comment.objects.all()
#         serializer = CommentSerializer(comment, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid() == True:
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT','DELETE'])
# def comment_detail(request, pk):
#     comment = get_object_or_404(Comment, pk=pk)

#     if request.method == 'GET':
#         serializer = CommentSerializer(comment)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CommentSerializer(comment, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

#     elif request.method == 'DELETE':
#         custom_response = {
#             'comment Deleted': comment.title
#         }
#         comment.delete()
#         return Response(custom_response, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def comment_list(request):
    comment = Comment.objects.all()
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data)


@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def comment_detail(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'GET':
        comment = Comment.objects.filter(user_id=request.user.id, pk=pk)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_record(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
