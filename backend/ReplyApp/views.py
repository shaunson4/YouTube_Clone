from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Reply
from .serializers import ReplySerializer
# Create your views here.
@api_view(['GET','POST'])
def replyApp_list(request):
   if request.method == 'GET':
    reply = Reply.objects.all()
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)
   elif request.method == 'POST':
      serializer = ReplySerializer(data=request.data)
      if serializer.is_valid()==True:
         serializer.save()
         return Response(serializer.data, status=status.HTTP_201_CREATED)
      else:
          Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','PUT','DELETE'])
def replyApp_detail(request, pk):
   reply = get_object_or_404(Reply, pk=pk)
   if request.method == 'GET':
    serializer = ReplySerializer(reply)
    return Response(serializer.data)
   elif request.method =='PUT':
     reply = get_object_or_404(reply,pk=pk)
     serializer = ReplySerializer(reply, data=request.data)
     serializer.is_valid(raise_exception=True)
     serializer.save()
     return Response(serializer.data)
   elif request.method == 'DELETE':
      reply.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
















