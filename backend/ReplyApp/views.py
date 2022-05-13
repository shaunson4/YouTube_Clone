from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer


# Create your views here.



# @api_view(['GET','POST'])
# def replyApp_list(request):
   
#    if request.method == 'GET':
#     reply = Reply.objects.all()
#     serializer = ReplySerializer(reply, many=True)
#     return Response(serializer.data)


#    elif request.method == 'POST':
#       serializer = ReplySerializer(data=request.data)
#       if serializer.is_valid()==True:
#          serializer.save()
#          return Response(serializer.data, status=status.HTTP_201_CREATED)
#       else:
#           Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET','PUT','DELETE'])
# def replyApp_detail(request, pk):
#    reply = get_object_or_404(Reply, pk=pk)


#    if request.method == 'GET':
#     serializer = ReplySerializer(reply)
#     return Response(serializer.data)


#    elif request.method =='PUT':
#      reply = get_object_or_404(reply,pk=pk)
#      serializer = ReplySerializer(reply, data=request.data)
#      serializer.is_valid(raise_exception=True)
#      serializer.save()
#      return Response(serializer.data)


#    elif request.method == 'DELETE':
#       reply.delete()
#       return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([AllowAny])
def replyApp_list(request):
    reply = Reply.objects.all()
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def replyApp_detail(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        reply = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data)




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_record(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)












